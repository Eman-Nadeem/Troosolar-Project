import React, { useEffect, useState } from 'react';
import closeButton from '../../assets/icons/close-button.svg';
import DropDown from '../../components/DropDown';
import sendIcon from '../../assets/icons/send.svg';

const initialMessagesMap = {
  123: [
    {
      sender: 'user',
      content: 'I need help with my loan',
      time: '2025-08-07T06:22:00Z',
    },
    {
      sender: 'support',
      content: 'Your request has been received',
      time: '2025-08-07T08:22:00Z',
    },
  ],
  235: [
    {
      sender: 'user',
      content: 'Why is my account locked?',
      time: '2025-08-06T10:00:00Z',
    },
    {
      sender: 'support',
      content: 'Please reset your password.',
      time: '2025-08-06T10:05:00Z',
    },
  ],
};

const TicketsModal = ({ isOpen, onClose, user, onStatusChange }) => {
  const [messageInput, setMessageInput] = useState('');
  const [messagesMap, setMessagesMap] = useState(initialMessagesMap);
  const [messages, setMessages] = useState([]);
  const [status, setStatus] = useState(user?.status || 'Pending');

  // Load messages & status when modal opens or user changes
  useEffect(() => {
    if (user) {
      setMessages(messagesMap[user.ticketId] || []);
      setStatus(user.status || 'Pending');
    }
  }, [user]);

  const sendMessage = () => {
    if (!messageInput.trim() || !user) return;

    const newMessage = {
      sender: 'user',
      content: messageInput,
      time: new Date().toISOString(),
    };

    const updatedMessages = [...(messagesMap[user.ticketId] || []), newMessage];

    setMessagesMap(prev => ({
      ...prev,
      [user.ticketId]: updatedMessages,
    }));

    setMessages(updatedMessages);
    setMessageInput('');
  };

  const handleStatusChange = (newStatus) => {
    setStatus(newStatus);
    if (onStatusChange) {
      onStatusChange(user.ticketId, newStatus); // Callback to parent
    }
  };

  if (!isOpen || !user) return null;

  return (
    <div className="font-montserrat fixed inset-0 pr-5 pt-5 z-50 bg-black/50 flex items-start justify-end">
      <div className="bg-white w-full max-w-lg h-[550px] pt-3 pb-0 rounded-lg shadow-lg relative flex flex-col">

        {/* Header */}
        <div className='flex justify-between items-center px-6 mb-3'>
          <p className="text-lg">Message</p>
          <div className='flex gap-3'>
            <DropDown
                options={['Pending', 'Answered', 'Closed']}
                onSelect={(option) => onStatusChange(user.ticketId, option)}
                title="Change Status"
            />
            <button onClick={onClose} className="cursor-pointer">
              <img src={closeButton} alt="Close Button" className="w-6 h-6 object-cover" />
            </button>
          </div>
        </div>

        <hr className='text-gray-400 mb-4' />

        {/* Ticket Info */}
        <div className='px-4'>
          <div className='border border-gray-300 rounded-lg p-4 w-full text-xs'>
            <div className='flex justify-between items-center mb-2.5'>
              <p className='text-gray-500'>Ticket ID</p>
              <p className='text-blue-900'>{user.ticketId}</p>
            </div>
            <hr className='text-gray-300 mb-2.5' />
            <div className='flex justify-between items-center mb-2'>
              <p className='text-gray-500'>Subject</p>
              <p>{user.subject}</p>
            </div>
            <hr className='text-gray-300 mb-2.5' />
            <div className='flex justify-between items-center'>
              <p className='text-gray-500'>First Repayment</p>
              <p>
                {new Date(user.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </p>
            </div>
          </div>
        </div>

        {/* Message List */}
        <div className="flex-1 overflow-y-auto px-4 py-6 space-y-4">
          {messages.map((msg, index) => (
            <div key={index} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[70%] px-4 py-2 rounded-full text-xs ${msg.sender === 'user' ? 'bg-primary text-white' : 'bg-gray-200 text-gray-800'}`}>
                {msg.content}
              </div>
              <div className={`text-xxs text-gray-400 mt-1 ${msg.sender === 'user' ? 'text-right ml-2' : 'text-left ml-2'}`}>
                {new Date(msg.time).toLocaleString('en-GB', {
                  day: '2-digit',
                  month: '2-digit',
                  year: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit',
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Send Bar */}
        <div className="px-4 py-3 bg-white">
          <div className="flex items-center border rounded-lg overflow-hidden px-4 py-2 border-gray-400">
            <input
              type="text"
              className="flex-1 text-sm focus:outline-none bg-transparent"
              placeholder="Type your message..."
              value={messageInput}
              onChange={(e) => setMessageInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
            />
            <button onClick={sendMessage}>
              <img src={sendIcon} alt="Send" className="w-4 h-4 ml-3 cursor-pointer" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketsModal;
