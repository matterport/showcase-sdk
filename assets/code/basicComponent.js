export async function startBasicComponents(mpSdk) {
  const [object] = await mpSdk.Scene.createObjects(1);
  this.object = object;
  // if we only want one node:
  const node = object.addNode(/* optionally, we can set the node's id here */);

  // ... we will be registering and adding components to nodes here in the following sections
  await mpSdk.Scene.register('basic', () => new BasicComponent());

  const basic = node.addComponent('basic');
  // if we wanted to run more than one instance of the component, we can add more
  const basic2 = node.addComponent('basic');
  const basic3 = node.addComponent('basic');
  const basic4 = node.addComponent('basic');

  object.start();

  // stop our Object after 1 second
  setTimeout(() => object.stop(), 1000);
}

class BasicComponent {
  onInit() {
    console.log('`onInit`')
  }

  onTick(delta) {
    console.log('`onTick`', delta);
  }

  onDestroy() {
    console.log('`onDestroy`');
  }
}
