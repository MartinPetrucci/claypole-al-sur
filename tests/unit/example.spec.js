import { mount } from '@vue/test-utils'
import Login from '@/views/Login.vue'

describe('Login.vue', () => {
  it('renders login button', () => {
    const wrapper = mount(Login)
    expect(wrapper.find(Login)).to.have.length(1);
  })
})
