import React from 'react'
// import './footer.css'

export const Footer = () => {
  let footerStyle = {
    position:"relative",
    top: "100vh",
    width: "100%"
  }

  return (
    <footer className="bg-dark text-light py-1 mt-3" style={footerStyle}>
      <p className="text-center">Copyright &copy; MyTodosList.com</p>
    </footer>
  )
}
// export default Footer