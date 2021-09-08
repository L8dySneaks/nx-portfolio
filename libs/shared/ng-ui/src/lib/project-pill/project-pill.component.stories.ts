import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { ProjectPillComponent } from './project-pill.component';

export default {
  title: 'ProjectPillComponent',
  component: ProjectPillComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    })
  ],
} as Meta<ProjectPillComponent>;

const Template: Story<ProjectPillComponent> = (args: ProjectPillComponent) => ({
  component: ProjectPillComponent,
  props: args,
});


export const Primary = Template.bind({});
Primary.args = {
}