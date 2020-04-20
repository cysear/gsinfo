/**
 * Created by admin on 2020/4/20.
 */
import ElTags from './tag';

/* istanbul ignore next */
ElTags.install = function(Vue) {
  Vue.component(ElTags.name, ElTags);
};

export default ElTags;
