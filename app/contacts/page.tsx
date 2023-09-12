import { MdEmail } from 'react-icons/md';
import { FaLinkedin, FaTelegram } from 'react-icons/fa';
import GradientPageHeader from '@/components/common/GradientPageHeader';
import { Metadata } from 'next';


export const metadata: Metadata = {
  title: 'Contacts',
  description: 'Contacts of Vlad Pelishenko',
}

export default function Contacts() {
  const contacts = [{icon: MdEmail, text: 'vladpelishenko14@gmail.com', isLink: false, placeholder: 'Email'},
                    {icon: FaLinkedin, text: 'https://www.linkedin.com/in/vlad-pelishenko/', isLink: true, placeholder: 'LinkedIn'},
                    {icon: FaTelegram, text: 'https://t.me/Veternum', isLink: true, placeholder: 'Telegram'}]

  return (
    <>
      <GradientPageHeader>How can you contact me?</GradientPageHeader>
      {/* <h1 className='font-extrabold text-transparent text-6xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 xs:mb-10 sm:mb-5 xs:text-center sm:text-left pl-0'>How can you contact me?</h1> */}
      <div>
        <h2 className='xs:text-center sm:text-left xs:text-4xl sm:text-3xl pb-3'>Choose what you like more!</h2>
        <ul className='flex flex-col gap-3 sm:pl-5 break-words'>
          {
            contacts.map(contact => (
              <li key={contact.placeholder} className='flex xs:flex-col sm:flex-row text-center items-center gap-2 hover:dark:text-yellow duration-75 hover:text-gray-500 text-2xl'>
                {<contact.icon size={25} />}
                {contact.isLink ? <a href={contact.text}>{contact.placeholder}</a> : contact.text}
              </li>
            ))
          }
        </ul>
      </div>
    </>
  )
}
