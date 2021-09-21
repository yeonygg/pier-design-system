import textBody from './text-body/data';
import textHeading from './text-heading/data';
import textLabel from './text-label/data';
import textCodeblock from './text-codeblock/data';
import link from './text-link/data';
import horizontalRule from './horizontal-rule/data';
import list from './list/data';
import breadcrumbs from './breadcrumbs/data';
import navigation from './navigation/data';
import tags from './tag/data';
import cards from './card/data';
import wells from './well/data';
import bubbleMenu from './bubble-menu/data';
import buttonHero from './button-hero/data';
import buttonStandard from './button-standard/data';
import buttonIcon from './button-icon/data';
import inputText from './input-text/data';
import inputGroup from './input-group/data';
import inputCombo from './input-combo/data';
import inputTextarea from './input-textarea/data';
import inputSelect from './input-select/data';
import inputCheckbox from './input-checkbox/data';
import inputRadio from './input-radio/data';
import inputToggle from './input-toggle/data';
import table from './table/data';
import inputForm from './form/data';
import accordion from './accordion/data';
import loadingSpinner from './loading-spinner/data';
import toolTip from './tooltip/data';
import section from './section/data';
import screen from './screen/data';

let componentsData = [];
componentsData.push(
    textBody,
    textHeading,
    textLabel,
    textCodeblock,
    horizontalRule,
    tags,
    cards,
    wells,
    link,
    list,
    breadcrumbs,
    navigation,
    bubbleMenu,
    buttonHero,
    buttonStandard,
    buttonIcon,
    inputText,
    inputGroup,
    inputTextarea,
    inputSelect,
    inputCheckbox,
    inputRadio,
    inputToggle,
    table,
    inputForm,
    inputCombo,
    accordion,
    loadingSpinner,
    toolTip,
    section,
    screen
);

componentsData.sort(function (a, b) {
    var textA = a.title.toUpperCase();
    var textB = b.title.toUpperCase();
    return textA < textB ? -1 : textA > textB ? 1 : 0;
});

export default componentsData;
