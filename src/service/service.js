import { apiClient } from './apiClient';

export default {
  async getSkills(){
    const { data } = await apiClient.get('skills')
    return data
  }
}
