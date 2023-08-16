export async function startBoundComponents(mpSdk) {
  /** register and create components **/
  await mpSdk.Scene.register('adder', () => new Adder());
  await mpSdk.Scene.register('rng', () => new RNG());
  await mpSdk.Scene.register('timer', () => new Timer(1000));

  const [object] = await mpSdk.Scene.createObjects(1);
  const node = object.addNode();

  const timer = node.addComponent('timer');
  const rng1 = node.addComponent('rng');
  const rng2 = node.addComponent('rng');
  const adder = node.addComponent('adder');

  /** create paths and bind them **/
  const tick = object.addEmitPath(timer, 'tick');
  const regenRNG1 = object.addEventPath(rng1, 'regenerate');
  const regenRNG2 = object.addEventPath(rng2, 'regenerate');

  const random1 = object.addOutputPath(rng1, 'value');
  const random2 = object.addOutputPath(rng2, 'value');

  const adderInput1 = object.addInputPath(adder, 'arg1');
  const adderInput2 = object.addInputPath(adder, 'arg2');

  random1.bind(adderInput1);
  adderInput2.bind(random2);

  tick.bind(regenRNG1); // we can bind an emit to an event
  regenRNG2.bind(tick); // ... or an event to emit (the result is the same)

  /** spy on components **/
  // spy on input changes to our Adder
  // using class syntax
  class AdderArg1Spy {
    path = adderInput1;
    onEvent(newValue) {
      console.log(`spied change to "${this.path.property}" its new value is ${newValue}`);
    }
  }
  object.spyOnEvent(new AdderArg1Spy());

  // spy on an output from our Adder
  const adderOutput = object.addOutputPath(adder, 'sum');
  // using inline syntax
  object.spyOnEvent({
    path: adderOutput,
    onEvent(newSum) {
      console.log(`spied change to "${this.path.property}" its new value is ${newSum}`);
    },
  });

  // spy on an emit from our Timer
  object.spyOnEvent({
    path: tick,
    onEvent(eventData) {
      console.log(`spied that an event "${this.path.emitName}" was emitted`);
    },
  });

  // spy on an event
  object.spyOnEvent({
    path: regenRNG1,
    onEvent(eventData) {
      console.log(`spied "${this.path.eventName}" received with data ${eventData}`);
    },
  });

  object.start();
}

class Adder {
  inputs = {
    arg1: 0,
    arg2: 0,
  };

  outputs = {
    sum: 0,
  }

  onInit() {
    this.outputs.sum = this.inputs.arg1 + this.inputs.arg2;
    console.log('initial sum', this.outputs.sum);
  }

  onInputsUpdated(prevInputs) {
    console.log('new inputs', this.inputs.arg1, this.inputs.arg2);
    console.log('previous sum', prevInputs.arg1 + prevInputs.arg2);

    this.outputs.sum = this.inputs.arg1 + this.inputs.arg2;
    console.log('updated sum', this.outputs.sum);
  }
}

class Timer {
  timeSinceUpdate = 0;

  // define an event that can be emitted: "tick"
  emits = {
    tick: true,
  }

  constructor(interval) {
    this.interval = interval;
  }

  onTick(delta) {
    this.timeSinceUpdate += delta;
    if (this.timeSinceUpdate >= this.interval) {
      this.timeSinceUpdate = this.timeSinceUpdate % this.interval;
      this.notify('tick', { /* This event has no payload but could be any arbitrary object */ });
    }
  }
}

class RNG {
  outputs = {
    value: 0,
  };

  // define an event that can be received: "regenerate"
  events = {
    regenerate: true,
  };

  onEvent(eventType, eventData) {
    if (eventType === 'regenerate') {
      this.outputs.value = Math.random();
      console.log(eventData); // events receive data with them, though the 'regenerate' event doesn't use or expect one
    }
  }
}
