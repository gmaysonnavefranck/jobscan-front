import Vuetify from 'vuetify'
import Vuex from 'vuex'
import store from '@/store'
import { mount, createLocalVue } from '@vue/test-utils'

import SkillForm from '@/components/form/skill-form.vue'

describe('SkillForm', () => {
  let localVue = createLocalVue()
  document.body.setAttribute('data-app', true)
  let vuetify

  beforeEach(() => {
    vuetify = new Vuetify()
    localVue.use(Vuex)
  })

  it('If there is no skill selected it should not add the skill.', async () => {
    const wrapper = mount(SkillForm,{
      store,
      vuetify,
      localVue,
    });


    const savebutton = wrapper.find('[data-testid="save-button"]');
    await savebutton.trigger('click')

    expect(store.state.skill.skills).toEqual([])
  })

  it('If there is a skill selected it should add the skill with the selected rating (3 by default)', async () => {
    const wrapper = mount(SkillForm,{
      store,
      vuetify,
      localVue,
    });

    await wrapper.setData({
      selectedSkill: {
        "id": 1,
        "created_at": "2020-09-10T07:48:33.000000Z",
        "updated_at": "2020-09-10T07:48:33.000000Z",
        "deleted_at": "",
        "name": "PHP",
        "slug": "php"
      }
    })

    const savebutton = wrapper.find('[data-testid="save-button"]');
    await savebutton.trigger('click')

    expect(store.state.skill.skills).toEqual([{
      "id": 1,
      "created_at": "2020-09-10T07:48:33.000000Z",
      "updated_at": "2020-09-10T07:48:33.000000Z",
      "deleted_at": "",
      "name": "PHP",
      "slug": "php"
    }])

  })
})