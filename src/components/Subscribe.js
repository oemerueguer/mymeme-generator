import React from 'react';
import { 
    MDBFooter, 
    MDBContainer, 
    MDBRow, MDBCol, 
    MDBBtn, 
    MDBInput} 
from 'mdb-react-ui-kit';

export default function Subscribe() {
  return (
    <MDBFooter backgroundColor='light' className='text-center text-lg-left'>
      <MDBContainer className='p-4 pb-0'>
        <form action=''>
          <MDBRow>
            <MDBCol size='auto' className='mb-4 mb-md-0'>
              <p className='pt-2'>
                <strong>Sign up for my newsletter</strong>
              </p>
            </MDBCol>

            <MDBCol md='5' size='12' className='mb-4 mb-md-0'>
              <MDBInput type='text' id='form5Example2' label='Email address' />
            </MDBCol>

            <MDBCol size='auto' className='mb-4 mb-md-0'>
              <MDBBtn>Subscribe</MDBBtn>
            </MDBCol>
          </MDBRow>
        </form>
      </MDBContainer>
    </MDBFooter>
  );
}