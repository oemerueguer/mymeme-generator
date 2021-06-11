import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol} from 'mdb-react-ui-kit';
import Subscribe from './Subscribe';
import './Footer.css';

export default function Footer() {
  return (
    <MDBFooter backgroundColor='primary' className='text-center text-lg-left bg-light curvy_bottom' >
      <MDBContainer className='p-4'>
        <MDBRow>
          <MDBCol lg='6' md='12' className='mb-4 mb-md-0'>
            <h5 className='text-uppercase'>About me</h5>

            <p>
                I'm a passionate Full-Stack Developer and Designer. I like to live out my creativity and
                trying out new libs! Every day a new tech will be born - so, declare variables, not war!
            </p>
          </MDBCol>

          <MDBCol lg='6' md='12' className='mb-4 mb-md-0'>
            <h5 className='text-uppercase'>Github</h5>

            <p>
                If you want to see more, just follow me on GitHub
            </p>
            <p>
              <i class="fab fa-github"></i>
            </p>
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      <Subscribe />
      

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        &copy; {new Date().getFullYear()} Copyright{' '}
        <a className='text-dark' href='https://github.com/oemerueguer'>
          Ömer Ügür
        </a>
      </div>
    </MDBFooter>
  );
}