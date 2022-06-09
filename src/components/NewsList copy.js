import React,{useState} from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
//import { Player } from 'video-react';
import Modal from 'react-modal';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

const NewsList = () => {

  var subtitle;
  const [modalIsOpen,setIsOpen] = useState(false);
  function openModal(title) {
    alert(title);
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.title = 'nitin';
  }

  function closeModal(){
    setIsOpen(false);
  }







    const latestNews = useSelector((state) => state.latestNews.latestNews);
    const renderList = latestNews.map((latestNews) =>{
      const {id, title, images, category, url}  = latestNews;
      return(
      //   <div  className="player">
      //   <Player
       
      //   playsInline
      //   poster={images}
      //   src="https://111.90.159.132/wp-content/themes/muvipro/redirect/?tokenkey=aHR0cHM6Ly9pbmRpYW1vdmllMi5iLWNkbi5uZXQvZGlzazIvbW92aWVzL1JhZGhlIFNoeWFtLm1wNA=="
      // />
      // </div>
         
        <div key={id}>
          <Link to={''} onClick={()=>(openModal(title))} >
          <img src={images} alt={images} />
            <h1>{title}</h1>
            <p>{category}</p>
          </Link>
        </div>
        
      )
    });   


  return <>
  {renderList} 
  <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >

          <h2 >Hello {subtitle}</h2>
          <button onClick={closeModal}>close</button>
          <div>I am a modal</div>
          <form>
            <input />
            <button>tab navigation</button>
            <button>stays</button>
            <button>inside</button>
            <button>the modal</button>
          </form>
        </Modal>
  </>
};



export default NewsList;
