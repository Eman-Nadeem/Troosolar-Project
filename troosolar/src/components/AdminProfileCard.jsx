import React, { useState } from 'react';
import adminPhoto from '../assets/images/admin-photo.jpg';
import EditProfileModal from '../pages/settings/EditProfileModal';

const AdminProfileCard = ({ user, onSave }) => {
  const [selectedUser, setSelectedUser] = useState(user);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeModal = () => {
   setIsModalOpen(false)
   setSelectedUser(null)
  }

  return (
    <div className="bg-gradient-to-br from-gradient-left to-gradient-right rounded-lg p-5 flex justify-between font-montserrat">
      
      {/* Left: Profile Panel */}
      <div className="text-white bg-gradient-to-br from-gradient-left to-gradient-right flex flex-col items-center justify-between gap-4 border-2 border-[#D1D1FF] rounded-lg p-5 w-1/3">
        <div className="w-36 h-36 rounded-full overflow-hidden border-2 border-white">
          <img src={adminPhoto} alt="Admin" className="w-full h-full object-cover" />
        </div>
        <div className="flex flex-col gap-3 text-center">
          <p className="text-xl font-semibold">{user?.firstName} {user?.lastName}</p>
          <p className="text-white/70 text-xs">{user?.email}</p>
        </div>
        <div className='w-full'>
          <button 
            onClick={() => {
              setSelectedUser(user);
              setIsModalOpen(true);
            }}
            className="cursor-pointer mt-3 w-full bg-white text-primary text-xs px-6 py-2 rounded-full"
          >
            Edit Profile
          </button>
        </div>
      </div>

      {/* Right: Info Section + Button at bottom */}
      <div className="text-white flex flex-col justify-between w-2/3 pl-10">
        {/* User Info */}
        <div className="grid grid-cols-2 gap-y-5 gap-x-10 pt-3 text-sm">
          <div className='grid grid-rows-4 gap-y-11'>
            <div>
              <p className="text-white/70 text-xs mb-1">First Name</p>
              <p>{user?.firstName}</p>
            </div>
            <div>
              <p className="text-white/70 text-xs mb-1">Surname</p>
              <p>{user?.lastName}</p>
            </div>
            <div>
              <p className="text-white/70 text-xs mb-1">Email Address</p>
              <p>{user?.email}</p>
            </div>
            <div>
              <p className="text-white/70 text-xs mb-1">Password</p>
              <p>{user?.password}</p>
            </div>
          </div>
          <div>
            <p className="text-white/70 text-xs mb-1">BVN</p>
            <p>{user?.bvn}</p>
          </div>
        </div>

        {/* Button aligned bottom right */}
        <div className="flex justify-end mt-auto pt-8">
          <button className="bg-white text-primary px-6 py-2 rounded-full text-xs">
            Add new Admin
          </button>
        </div>
      </div>

      <EditProfileModal
        isOpen={isModalOpen}
        onClose={closeModal}
        user={selectedUser}
        onSave={(updated) => {
        onSave?.(updated);
        setSelectedUser(updated);
        setIsModalOpen(false);
      }}
      />
    </div>
  );
};

export default AdminProfileCard;
