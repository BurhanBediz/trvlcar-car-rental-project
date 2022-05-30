import React, {useState,useEffect} from 'react'
import AdminUserEdit from '../../components/admins/users/admin-user-edit'
import { useStore } from '../../store';
import {useParams} from 'react-router-dom'
import { getUser } from '../../api/admin-user-service';
import { ObjectSchema } from 'yup';

const AdminUsersEditPage = () => {
  const [user,setUser] = useState(null)
  const [loading, setLoading]=useState(true)

  const id= useParams();
  const {userId} = id;
  
  useEffect(() => {
   
    dataLoad();

  }, [])

  

  const dataLoad =async () => { 
    try {
      
      const resp=await getUser(userId);
      setUser(resp.data)
      console.log(resp.data)
    } catch (err) {
      console.log(err)
    }
    finally{
      setLoading(false)
    }
  }
  
  if(user)
  return (
    <div><AdminUserEdit user={user} id={userId}/></div>
  )
}

export default AdminUsersEditPage