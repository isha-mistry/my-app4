
import axios from 'axios';

/**
 * AIXBT Intelligence Client
 * Powers market-aware dApps with social momentum and signal extraction.
 */
export class AIXBTClient {
  private client;

  constructor(apiKey: string) {
    this.client = axios.create({
      baseURL: 'https://api.aixbt.tech/v2',
      headers: {
        'x-api-key': apiKey,
      },
    });
  }

  /**
   * Fetch projects with high social momentum
   */
  async getTrendingProjects(limit = 10) {
    const response = await this.client.get('/projects', {
      params: { limit, sort: 'momentum_score:desc' },
    });
    return response.data.data;
  }

  /**
   * Fetch latest market signals
   */
  async getLatestSignals(categories?: string[]) {
    const response = await this.client.get('/signals', {
      params: { categories: categories?.join(',') },
    });
    return response.data.data;
  }

  /**
   * Get specific project details and signals
   */
  async getProjectDetails(projectId: string) {
    const response = await this.client.get(`/projects/${projectId}`);
    return response.data.data;
  }
}
