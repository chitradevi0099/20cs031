
const BASE_URL = 'http://20.244.56.144/train';


async function fetchData(url, token) {
  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    return await response.json();
  } catch (error) {
    throw new Error('Error fetching data:', error.message);
  }
}


export async function registerCompany(companyData) {
  try {
    const response = await fetch(`${BASE_URL}/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(companyData),
    });

    if (!response.ok) {
      throw new Error('Company registration failed');
    }

    return await response.json();
  } catch (error) {
    throw new Error('Error registering company:', error.message);
  }
}


export async function getAuthorizationToken(tokenData) {
  try {
    const response = await fetch(`${BASE_URL}/auth`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(tokenData),
    });

    if (!response.ok) {
      throw new Error('Authorization failed');
    }

    const data = await response.json();
    return data.access_token;
  } catch (error) {
    throw new Error('Error getting authorization token:', error.message);
  }
}


export async function getTrains(token) {
  try {
    const response = await fetchData(`${BASE_URL}/trains`, token);
    return response;
  } catch (error) {
    throw new Error('Error fetching train details:', error.message);
  }
}


export async function getTrainByNumber(trainNumber, token) {
  try {
    const response = await fetchData(`${BASE_URL}/trains/${trainNumber}`, token);
    return response;
  } catch (error) {
    throw new Error('Error fetching train details:', error.message);
  }
}
