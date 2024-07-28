import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom'
import BackButton from '../components/BackButton'
import Spinner from '../components/Spinner'

const DeleteBook = () => {
  const [book, setBook] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  // var resp;
  const handleDeleteBook = () => {
    setLoading(true);
    axios
      .delete(`http://localhost:5555/books/${id}`)
      .then(() => {
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        alert('Error: Check console for details');
        console.log(error);
      });
  };
  // useEffect(() => {
  //   setLoading(true);
  //   // console.log(id)
  //   axios
  //     .get(`http://localhost:5555/books/${id}`)
  //     .then((response) => {
  //       setBook(response.data.book);
  //       setLoading(false);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //       setLoading(false);
  //     });
  // }, [])

// const DeleteBook = () => {
  return (
    <div className='p-4'>
      <BackButton/>
      <h1 className='text-3x1 my-4'>Delete Book</h1>
      {loading ? (
        <Spinner />
      ) : (
        <div className='flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto'>
          <button className = 'p-2 bg-red-700 m-8 text-white' onClick={handleDeleteBook}>
            Delete
          </button>
        </div>
      )}
      
      
    </div>
  )
}

export default DeleteBook