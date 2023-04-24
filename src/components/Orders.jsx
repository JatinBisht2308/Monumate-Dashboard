import React from 'react'
import styled from 'styled-components'
function Orders() {
    return (
        <Section>
        <div className="orders">
      <div className="orders__details">
          <div>
                <h4>Recent Order</h4> 
          </div>
          <div> 
            <button> SEE ALL</button>
            
          </div>
        </div>
        <div className="orders__table">
            <table>
            <tr>
              <th>Tracking ID</th>
              <th>Monument Name</th>
              <th>Date</th>
              <th>Price</th>
              <th>Status</th>
            </tr>
            <tr>
              <td>#9876543</td>
              <td className="img"> <img src="https://theheritageart.com/wp-content/uploads/2022/11/Jantar-Mantar_1400-1000x565.jpeg" alt="" /><span>Jantar Mantar</span></td>
              <td>Apr 25, 2023</td>
              <td>₹35,000</td>
              <td ><button>Complete</button></td>
            </tr>
            </table>
        </div>
        </div>
        </Section>
    )
}

export default Orders
const Section = styled.section`
.orders {
    color: black;
    width: 100%;
    .orders__details {
        display: flex;
        justify-content: space-between;
        margin: 1rem 0 ;
        div {
            display: flex;
            gap: 1rem;
            button {
                padding: 0.4rem 1rem;
                border: none;
                cursor: pointer;
                background-color: white;
                color: #668DFF;
                font-weight: bold;
            }
        }
    }
    .orders__table {
        display: flex;
        justify-content: space-between;
        margin: 1rem 0;
        table {
            border-collapse: collapse;
            width: 100%;
            th, td {
                text-align: center;
                padding: 5px;
                justify-content: space-evenly;
                button {
border-radius: 0.3rem;
padding: 0.4rem 1rem;
border: none;
cursor: pointer;
background-color: #EEF4FF;
color: blue;
font-weight: bold;
                }
                img {
                    height: 2rem;
                    width: 2rem;
                }
                span {
                    margin-top: 0.2 rem;
                }
            }
            .img {
                display: flex;
                justify-content: center;
            }
        }
    }
}
`;