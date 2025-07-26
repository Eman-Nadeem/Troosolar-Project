import React , { useState, useRef, useEffect } from 'react'
import closeButton from '../../assets/icons/close-button.svg'
import rightArrow from '../../assets/icons/right-arrow.svg'

const EditProfileModal = ({ isOpen, onClose, user, onSave }) => {
    const roleOptions = ['Admin', 'Support', 'Moderator'];
    const [selectedRole, setSelectedRole] = useState('Admin');
    const [showRoleOptions, setShowRoleOptions] = useState(false);

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
    if (user) {
        setFirstName(user.firstName || '');
        setLastName(user.lastName || '');
        setEmail(user.email || '');
        setPassword(user.password || '');
        setSelectedRole(user.role || 'Admin');
    }
    }, [user]);

  const dropdownRef = useRef();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setShowRoleOptions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (user?.role) {
        setSelectedRole(user.role);
    }
    }, [user]);

  if (!isOpen || !user) return null

  return (
    <div className="font-montserrat fixed inset-0 pr-5 z-50 bg-black/50 flex items-center justify-end">
      <div className="bg-white w-full max-w-lg pt-3 pb-5 rounded-lg shadow-lg relative">
        <div className='flex justify-between items-center px-6 mb-3'>
            <p className="text-lg">
                Edit Profile
            </p>
            
            <button onClick={onClose} className="cursor-pointer">
              <img src={closeButton} alt="Close Button" className="w-6 h-6 object-cover" />
            </button>
        </div>

        <hr className='text-gray-400 mb-4'/>

        {/* Account Info */}
        <div className="flex flex-col gap-2 px-6 text-xs">
          <div className='flex flex-col gap-2'>
            <label>First Name</label>
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder='Enter your first name'
              className="w-full border px-3 py-3 rounded border-gray-300"
            />
          </div>

          <div className='flex flex-col gap-2'>
            <label>Surname</label>
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder='Enter your surname'
              className="w-full border px-3 py-3 rounded border-gray-300"
            />
          </div>

          <div className='flex flex-col gap-2'>
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder='Enter your email'
              className="w-full border px-3 py-3 rounded border-gray-300"
            />
          </div>

          <div className='flex flex-col gap-2'>
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder='Enter your password'
              className="w-full border px-3 py-3 rounded border-gray-300"
            />
          </div>

          <div className="flex flex-col gap-2 relative" ref={dropdownRef}>
            <label>Role</label>
            <button
              onClick={() => setShowRoleOptions(!showRoleOptions)}
              className="cursor-pointer relative border border-gray-300 gap-2 text-xs bg-white px-4 py-3 rounded-md flex items-center justify-between "
            >
              {selectedRole}
              <img src={rightArrow} alt="Right arrow" className="w-3 h-3 object-contain" />
            </button>

            {/* ✅ Inline Options */}
            {showRoleOptions && (
              <div className="absolute top-full mt-1 w-full h-20 overflow-y-auto bg-white border border-gray-300 shadow rounded z-20">
                {roleOptions.map((role) => (
                  <div
                    key={role}
                    onClick={() => {
                      setSelectedRole(role)
                      setShowRoleOptions(false)
                    }}
                    className="border-b border-gray-300 px-4 py-2 hover:bg-gray-100 text-xs cursor-pointer"
                  >
                    {role}
                  </div>
                ))}
              </div>
            )}
          </div>

        </div>

        <div className='px-6 w-full'>
            <button 
                onClick={()=>{
                    const updated = {
                        ...user,
                        firstName,
                        lastName,
                        email,
                        password,
                        role: selectedRole,
                    };
                    onSave(updated);
                    console.log(updated);
                    onClose();
                }}
                className="cursor-pointer w-full bg-primary text-white px-6 py-3 rounded-full text-xs mt-4"
            >
                Save Changes
            </button>
        </div>
      </div>
    </div>
  )
}

export default EditProfileModal
