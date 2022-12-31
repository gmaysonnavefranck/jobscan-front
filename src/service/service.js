import { apiClient } from './apiClient';

export default {
  async getSkills(){
    const { data } = await apiClient.get('skills')
    console.log(data)
    return data
  }
}
