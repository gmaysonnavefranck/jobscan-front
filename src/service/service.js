import { apiClient } from './apiClient';

export default {
  async getSkills(){
    const { data } = await apiClient.get('skills')
    return data
  },

  async getJobPostings(skills) {
    console.log(skills)
    let queryString = '';
    skills.forEach((skill, index) => {
      if(queryString) queryString += '&'
      queryString += `skill[${skill.toLowerCase()}]=${++index}`
    })
    const { data } = await apiClient.get(`postings/search/skills?${queryString}`)
    console.log(data)

  }
}
