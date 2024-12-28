const { expect } = require("chai");

describe("MessageBoard Contract", function () {
  let MessageBoard;
  let messageBoard;
  let deployer;
  let addr1;
  let addr2;

  beforeEach(async function () {
    // Deploy kontratını alıyoruz
    MessageBoard = await ethers.getContractFactory("MessageBoard");

    // Yeni kontrat örneğini dağıtıyoruz
    [deployer, addr1, addr2] = await ethers.getSigners();
    messageBoard = await MessageBoard.deploy();
  });

  it("should deploy the contract", async function () {
    // Kontratın doğru adresle dağıtıldığını kontrol ediyoruz
    expect(await messageBoard.address).to.properAddress;
  });

  it("should add a message", async function () {
    // Mesaj ekleme işlemi
    const name = "Alice";
    const content = "Hello, world!";

    await messageBoard.addMessage(name, content);

    // Eklenen mesajları alıyoruz
    const messages = await messageBoard.getMessages();

    // İlk mesajın doğruluğunu kontrol ediyoruz
    expect(messages.length).to.equal(1);
    expect(messages[0].name).to.equal(name);
    expect(messages[0].content).to.equal(content);
    expect(messages[0].sender).to.equal(deployer.address);
  });

  it("should emit a MessageAdded event", async function () {
    // Mesaj eklerken event'inin tetiklendiğini kontrol ediyoruz
    const name = "Bob";
    const content = "Test message";

    await expect(messageBoard.addMessage(name, content))
      .to.emit(messageBoard, "MessageAdded")
      .withArgs(name, content, deployer.address);
  });

  it("should allow multiple users to add messages", async function () {
    // Farklı adreslerden mesaj ekleyelim
    const name1 = "Alice";
    const content1 = "Message 1";
    const name2 = "Bob";
    const content2 = "Message 2";

    await messageBoard.connect(addr1).addMessage(name1, content1);
    await messageBoard.connect(addr2).addMessage(name2, content2);

    const messages = await messageBoard.getMessages();

    // 2 mesajın eklenmiş olduğunu kontrol ediyoruz
    expect(messages.length).to.equal(2);
    expect(messages[0].name).to.equal(name1);
    expect(messages[1].name).to.equal(name2);
  });
});
