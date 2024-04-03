import{ fetch} from 'node-fetch';

async function fetchData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error.message);
        return null;
    }
}

fetchData()
    .then(data => {
        if (data) {
            console.log('Fetched data:', data);
        }
    });
