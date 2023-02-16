import React from 'react';
import { Table } from 'react-bootstrap';
import EmojiFlagsIcon from '@mui/icons-material/EmojiFlags';
import FlagIcon from '@mui/icons-material/Flag';

const Sales = () => {
  return (
    <section>
      <div className="Saleser">
        <h4 className="MainHead" style={{ padding: '1rem' }}>
          Sales by country
        </h4>
        <Table responsive>
          <tbody style={{ padding: '0 1rem 0 4px' }}>
            <tr>
              <td>
                <EmojiFlagsIcon style={{ color: '#e36e68' }} />
              </td>
              <td>
                <p className="tablepara">Country</p>India
              </td>
              <td>
                <p className="tablepara">Sales</p>2500
              </td>
              <td>
                <p className="tablepara">Values</p>$2,30,000
              </td>
              <td>
                <p className="tablepara">Bounce</p>29.9
              </td>
            </tr>
            <tr>
              <td>
                <FlagIcon style={{ color: '#e36e68' }} />
              </td>
              <td>
                <p className="tablepara">Country</p>India
              </td>
              <td>
                <p className="tablepara">Sales</p>2500
              </td>
              <td>
                <p className="tablepara">Values</p>$2,30,000
              </td>
              <td>
                <p className="tablepara">Bounce</p>29.9
              </td>
            </tr>
            <tr>
              <td>
                <EmojiFlagsIcon style={{ color: '#e36e68' }} />
              </td>
              <td>
                <p className="tablepara">Country</p>India
              </td>
              <td>
                <p className="tablepara">Sales</p>2500
              </td>
              <td>
                <p className="tablepara">Values</p>$2,30,000
              </td>
              <td>
                <p className="tablepara">Bounce</p>29.9
              </td>
            </tr>
            <tr>
              <td>
                <EmojiFlagsIcon style={{ color: '#e36e68' }} />
              </td>
              <td>
                <p className="tablepara">Country</p>India
              </td>
              <td>
                <p className="tablepara">Sales</p>2500
              </td>
              <td>
                <p className="tablepara">Values</p>$2,30,000
              </td>
              <td>
                <p className="tablepara">Bounce</p>@29.9
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </section>
  );
};
export default Sales;
