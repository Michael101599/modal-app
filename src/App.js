import {openModal, openModalAccount} from "./components/openModal";


function App() {

  let handleOpenModal = () => {
    openModal();
  }

  let handleOpenModal2 = () => {
    openModalAccount();
  }

  return (
    <div className="App">
      <button onClick={handleOpenModal}>Abrir modal</button>
      <button onClick={handleOpenModal2}>Abrir modal</button>
    </div>
  );
}

export default App;
