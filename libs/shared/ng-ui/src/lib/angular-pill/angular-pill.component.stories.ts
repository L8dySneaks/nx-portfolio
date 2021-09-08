import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { AngularPillComponent } from './angular-pill.component';

export default {
  title: 'AngularPillComponent',
  component: AngularPillComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    })
  ],
} as Meta<AngularPillComponent>;

const Template: Story<AngularPillComponent> = (args: AngularPillComponent) => ({
  component: AngularPillComponent,
  props: args,
});


export const Primary = Template.bind({});
Primary.args = {
}