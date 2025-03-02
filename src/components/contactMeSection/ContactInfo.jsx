import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import SingleInfo from "./SingleInfo";

const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-4">
      <SingleInfo text="imal.chana@gmail.com" Image={HiOutlineMail} />
      <SingleInfo text="+94 0767716475" Image={FiPhone} />
      <SingleInfo text="Polonnaruwa,Srilanka" Image={IoLocationOutline} />
    </div>
  );
};

export default ContactInfo;
