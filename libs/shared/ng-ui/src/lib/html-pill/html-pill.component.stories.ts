import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { HtmlPillComponent } from './html-pill.component';

export default {
  title: 'HtmlPillComponent',
  component: HtmlPillComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    })
  ],
} as Meta<HtmlPillComponent>;

const Template: Story<HtmlPillComponent> = (args: HtmlPillComponent) => ({
  component: HtmlPillComponent,
  props: args,
});


export const Primary = Template.bind({});
Primary.args = {
}