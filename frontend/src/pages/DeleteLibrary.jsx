import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {useNavigate,useParams} from 'react-router-dom'
import BackButton from '../components/BackButton'
import Spinner from '../components/Spinner'
import { useSnackbar } from 'notistack';

const DeleteLibrary = () => {
  const [loading, setLoading] = useState(false);
  const [author, setAuthor] = useState('');
  const [publishYear, setPublishYear] = useState('');
  const { id } = useParams();
  const navigate = useNavigate();
  const {enqueueSnackbar} = useSnackbar()
  const handleDeleteLibrary = async (criteria) => {
    setLoading(true);
    axios
      .delete(`http://localhost:5555/books/bulk-delete`, {params: criteria}) //Use patch instead of get -> put ??? 
      .then(() => {
        // setOldBook(response.data.book);
        setLoading(false);
        enqueueSnackbar('Book(s) have been deleted', {variant: 'success'});
        navigate('/');
      })
      .catch((error) => {
        setLoading(false);
        // alert('Error: Check console for details');
        enqueueSnackbar('Error', {variant: 'error'});
        console.log(error);
      });
  };
  return (
    <div className='p-4'>
      <BackButton/>
      <h1 className='text-3x1 my-4'>Delete Books by Author or Year</h1>
      {loading ? (
        <Spinner />
      ) : ''}
      <div className='flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto'>
          <div className='my-4'>
            <label className='text-xq mr-4 text-gray-500'>Author</label>
            <input
              type = 'text'
              value = {author}
              onChange = {(e) => setAuthor(e.target.value)}
              className = 'border-2 border-gray-500 px-4 py-2 w-full'
            />
          </div>
          <div className='my-4'>
            <label className='text-xq mr-4 text-gray-500'>Publish Year</label>
            <input
              type = 'text'
              value = {publishYear}
              onChange = {(e) => setPublishYear(e.target.value)}
              className = 'border-2 border-gray-500 px-4 py-2 w-full'
            />
          </div>
          <button className = 'p-2 bg-sky-300 m-8' onClick={handleDeleteLibrary({author, publishYear})}>
            Delete
          </button>
        </div>
    </div>
  )
}

export default DeleteLibrary