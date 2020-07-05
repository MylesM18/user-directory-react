import React from 'react'

function Header () {

    return (
     <div className='container' style={headerStyle}>
        <h1>Empolyee Directory</h1>
        </div>
    );
};

const headerStyle = {
    backgroundColor: '#D5F5E3',
    marginTop: '20px',
    padding: '30px',
    color: '#283747',
    fontFamily: 'Crimson Text, serif',
    borderRadius: '10px',
    textAlign: 'center'
    
}

export default Header;