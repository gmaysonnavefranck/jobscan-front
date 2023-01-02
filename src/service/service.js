import { apiClient } from './apiClient';

export default {
  async getSkills(){
    const { data } = await apiClient.get('skills')
    return data
  },

  async getJobPostings(skills) {
    let queryString = '';
    skills.forEach((skill, index) => {
      if(queryString) queryString += '&'
      queryString += `skill[${skill.name.toLowerCase().replace(/\W/g, '')}]=${skill.rating}`
    })
    const { data } = await apiClient.get(`postings/search/skills?${queryString}`)
    return data.results
  }
}
