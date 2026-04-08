import { Mail, Phone } from "lucide-react";
import React from "react";
import { Field, FieldGroup, FieldLabel, FieldSet } from "../ui/field";
import { Input } from "../ui/input";
import { FaFacebook, FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-slate-100 py-10 px-10 mt-24">
      <div className="flex flex-col md:flex-row justify-between">
        <div>
          <h2 className="font-bold text-2xl hover:text-[#7b5e00] transition duration-300">
            Contact Us
          </h2>
          <ul>
            <li className="flex gap-2 mt-4">
              <Phone stroke="#7b5e00" size={22} />
              0033666100010
            </li>
            <li className="flex gap-2 mt-4">
              <Mail stroke="#7b5e00" size={22} /> support@usfranc.com
            </li>
            <li className="flex gap-2 mt-4">
              <Mail stroke="#7b5e00" size={22} /> usfranc@bobosohomail.com
            </li>
          </ul>
        </div>
        <div>
          <h2 className="font-bold text-2xl hover:text-[#7b5e00] transition duration-300">
            Newsletter
          </h2>
          <p className="my-6 text-gray-500">
            Subscribe to stay updated with our latest news and offers.
          </p>
          <div className="flex">
            <FieldSet className="w-full max-w-xs">
              <FieldGroup>
                <Field>
                  <Input
                    id="username"
                    type="text"
                    placeholder="user@gmail.com"
                    className={"rounded-r-none rounded-l-lg"}
                  />
                </Field>
              </FieldGroup>
            </FieldSet>
            <button className="px-6 py-1 rounded-r-lg rounded-l-none text-white bg-[#7b5e00] cursor-pointer">
              Subscribe
            </button>
          </div>
        </div>
        <div>
          <h2 className="font-bold text-2xl hover:text-[#7b5e00] transition duration-300">
            Follow Us
          </h2>
          <ul className="flex gap-2 mt-6">
            <li>
              <FaXTwitter
                className="hover:text-[#7b5e00] transition duration-300"
                size={22}
              />
            </li>
            <li>
              <FaFacebook
                className="hover:text-[#7b5e00] transition duration-300"
                size={22}
              />
            </li>
            <li>
              <FaGithub
                className="hover:text-[#7b5e00] transition duration-300"
                size={22}
              />
            </li>
            <li>
              <FaLinkedin
                className="hover:text-[#7b5e00] transition duration-300"
                size={22}
              />
            </li>
          </ul>
        </div>
      </div>
      <p className="text-center text-xs text-gray-500 mt-10">
        &copy; {new Date().getFullYear()} USFRANC LTD | Registration N° 10325829
        | England & Wales.
      </p>
    </footer>
  );
};

export default Footer;
