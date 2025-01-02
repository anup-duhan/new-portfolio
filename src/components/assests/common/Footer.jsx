import React from 'react'

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="bg-lightblack text-white bg-opacity-90 z-[100] py-3 font-semibold text-center text-sm md:text-base">
      <h2>Developed by Anup Duhan & Copyright &copy; by Codewide, Hisar | {currentYear} All Right Reserved</h2>
    </div>
  )
}

export default Footer
