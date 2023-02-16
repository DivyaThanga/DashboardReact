import React from 'react';
import styled from 'styled-components';
import 'react-dom/client';
import CropOriginalIcon from '@mui/icons-material/CropOriginal';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import AppsIcon from '@mui/icons-material/Apps';
import CropOriginalIcon from '@mui/icons-material/CropOriginal';
import PixIcon from '@mui/icons-material/Pix';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import AssignmentIcon from '@mui/icons-material/Assignment';
import DescriptionIcon from '@mui/icons-material/Description';

const Boxes = styled.div`
width:100%;
padding:1rem;
display:flex;
justify-content:space-between;`;

const SidePage = () => {
  return (
    <section>
      <h6 style={{ margin: 'auto', padding: '1rem 3rem 2rem' }}>
        <a
          href="#"
          style={{
            textDecoration: 'none',
            color: 'white',
          }}
        >
          DASHBOARD
        </a>
      </h6>
      <Boxes>
        <p className="Menusico">
          <AccountCircleIcon></AccountCircleIcon>
        </p>

        <h6>Alison quick</h6>
        <p>
          <KeyboardArrowDownIcon />
        </p>
      </Boxes>
      <h6>PAGES</h6>
      <Boxes>
        <p className="Menusico">
          <PixIcon />
        </p>
        <h6 className="menuhead">Dashboard</h6>
        <p>
          <KeyboardArrowDownIcon />
        </p>
      </Boxes>
      <Boxes>
        <p className="Menusico">
          <CropOriginalIcon />
        </p>
        <h6 className="menuhead">Pages</h6>
        <p>
          <KeyboardArrowDownIcon />
        </p>
      </Boxes>
      <Boxes>
        <p className="Menusico">
          <AppsIcon />
        </p>
        <h6 className="menuhead">Application</h6>
        <p>
          <KeyboardArrowDownIcon />
        </p>
      </Boxes>
      <hr />
      <h6>DOCS</h6>
      <Boxes>
        <p className="Menusico">
          <LocalMallIcon />
        </p>
        <h6 className="menuhead">Ecommorce</h6>
        <p>
          <KeyboardArrowDownIcon />
        </p>
      </Boxes>
      <Boxes>
        <p className="Menusico">
          <AssignmentIcon />
        </p>
        <h6 className="menuhead">Authentication</h6>
        <p>
          <KeyboardArrowDownIcon />
        </p>
      </Boxes>
      <Boxes>
        <p className="Menusico">
          <DescriptionIcon />
        </p>
        <h6 className="menuhead">Descripe</h6>
        <p>
          <KeyboardArrowDownIcon />
        </p>
      </Boxes>
    </section>
  );
};

export default SidePage;
