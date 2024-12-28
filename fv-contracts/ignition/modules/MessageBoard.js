const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("MessageBoardModule", (m) => {
  // Parametreler
  const name = m.getParameter("name", "Default Name");
  const content = m.getParameter("content", "Default Content");

  // MessageBoard kontratını deploy et
  const messageBoard = m.contract("MessageBoard", []);

  // Mesajı ekle
  m.call(messageBoard.addMessage(name, content));

  return { messageBoard };
});
