import './main.css';
import axios from 'axios';
import { useState, useEffect } from 'react';

export default function Mains(){
  
        const [componentName, setComponentName] = useState('');
        const [componentQuantity, setComponentQuantity] = useState(0);
        const [components, setComponents] = useState([]);
        const [inventoryStatus, setInventoryStatus] = useState(null);
      
        useEffect(() => {
          fetchData();
        }, []);
      
        const fetchData = async () => {
          try {
            const response = await axios.get('/api/components');
            setComponents(response.data);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
      
        const addComponent = async () => {
          try {
            await axios.post('/api/components/add', {
              name: componentName,
              quantity: componentQuantity
            });
            fetchData();
          } catch (error) {
            console.error('Error adding component:', error);
          }
        };
      
        const subtractComponent = async (id) => {
          try {
            await axios.put(`/api/components/${id}/subtract`, {
              quantity: componentQuantity
            });
            fetchData();
          } 
          catch (error) {
            console.error('Error subtracting component:', error);
          }
        };
      
        const fetchInventoryStatus = async () => {
          try {
            const response = await axios.get('/api/inventory/status');
            setInventoryStatus(response.data.totalQuantity);
          }
           catch (error) {
            console.error('Error fetching inventory status:', error);
          }
        };
    
    return(
       
        <div className='main'>
            
          
      <h1>Components Management System</h1>
      <div>
        <input
          type="text"
          placeholder="Component Name"
          value={componentName}
          onChange={(e) => setComponentName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Quantity"
          value={componentQuantity}
          onChange={(e) => setComponentQuantity(e.target.value)}
        />
        <button onClick={addComponent}>Add Component</button>
      </div>
      <div>
        <h2>Component List</h2>
        <ul>
          {components.map(component => (
            <li key={component._id}>
              {component.name}: {component.quantity}{' '}
              <button onClick={() => subtractComponent(component._id)}>
                Subtract
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <button onClick={fetchInventoryStatus}>Get Inventory Status</button>
        {inventoryStatus !== null && (
          <p>Total Inventory: {inventoryStatus}</p>
        )}
      </div>
    </div>
           
  
        
    )
}