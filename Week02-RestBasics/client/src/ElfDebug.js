export default class ElfDebug {
    constructor(showInit=false) {
        this.showData = showInit;
    }

    getFirst(wrapper, element) {
        if (this.showData) {
            const paragraphData = wrapper.find(element).first().debug();
            console.log(paragraphData);
        }
    }

    getLast(wrapper, element) {
        if (this.showData) {
            const paragraphData = wrapper.find(element).last().debug();
            console.log(paragraphData);
        }

    }

    getAll(wrapper, element) {
        if (this.showData) {
            const paragraphData = wrapper.find(element).debug();
            console.log(paragraphData);
        }
    }

    getIndex(wrapper, index) {
        if (this.showData) {
            var paragraphData = wrapper.find('form').childAt(index).debug();
            console.log(paragraphData);
        }
    }
}