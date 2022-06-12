Hooks.once('init', async () => {
  const createDocuments = foundry.abstract.Document.createDocuments;
  foundry.abstract.Document.createDocuments = function newCreateDocuments(dataArray=[], ...args) {
    dataArray.forEach(data => {
      if (!data.name) data.name = `New ${this.documentName}`;
    })
    return createDocuments.call(this, dataArray, ...args);
  };
});