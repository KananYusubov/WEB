class ApiService {
  _apiBaseUrl = "https://swapi.py4e.com/api";

  async getResources(url) {
    const response = await fetch(`${this._apiBaseUrl}${url}`);

    if (!response.ok) {
      throw new Error(`Could not fetch ${url},received ${response.status}`);
    }

    return await response.json();
  }

  async getPeople() {
    const response = await this.getResources(`/people/`);
    return response.results;
  }

  getPerson(id) {
    return this.getResources(`/people/${id}`);
  }

  async getAllPlanets() {
    const response = await this.getResources(`/planets/`);
    return response.results;
  }

  getPlanet(id) {
    return this.getResources(`/planets/${id}`);
  }

  async getAllStarships() {
    const response = await this.getResources(`/starships/`);
    return response.results;
  }

  getStarships(id) {
    return this.getResources(`/starships/${id}`);
  }
}

export default ApiService;
