define(["require", "exports", "flash/system/BaseObject", "flash/display/DisplayObject", "Error"], function (require, exports, BaseObject_1, DisplayObject_1, Error_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class DisplayObjectContainer extends BaseObject_1.BaseObject {
    }
    exports.DisplayObjectContainer = DisplayObjectContainer;
    class InnerContainer extends BaseObject_1.BaseObject {
        constructor() {
            super();
            this._children = [];
        }
        set parent(value) {
            this._parent = value;
        }
        addChildAt(child, index) {
            if (!child) {
                return null;
            }
            this._children.splice(index, 0, child);
            DisplayObject_1.DisplayObject.setParent(child, this._parent);
            return child;
        }
        addChild(child) {
            if (!child) {
                return null;
            }
            this._children.push(child);
            DisplayObject_1.DisplayObject.setParent(child, this._parent);
            return child;
        }
        get numChildren() {
            return this._children.length;
        }
        removeChildAt(index) {
            if (index >= this._children.length) {
                return null;
            }
            if (index < 0) {
                return null;
            }
            var child = this._children[index];
            this._children.splice(index, 1);
            DisplayObject_1.DisplayObject.setParent(child, null);
            return child;
        }
        setChildIndex(child, index) {
            if (index >= this._children.length) {
                return null;
            }
            if (index < 0) {
                return null;
            }
            var currentIndex = this._children.indexOf(child);
            if (currentIndex < 0) {
                return null;
            }
            this._children.splice(currentIndex, 1);
            this._children.splice(index, 0, child);
        }
        swapChildrenAt(index1, index2) {
            var child1 = this.getChildAt(index1);
            var child2 = this.getChildAt(index2);
            if (child1 && child2) {
                this.swapChildren(child1, child2);
            }
        }
        getChildByName(name) {
            for (var i = 0; i < this._children.length; i++) {
                if (this._children[i].name == name) {
                    return this._children[i];
                }
            }
            return null;
        }
        getChildAt(index) {
            if (index >= this._children.length) {
                return null;
            }
            if (index < 0) {
                return null;
            }
            return this._children[index];
        }
        contains(child) {
            const index = this._children.indexOf(child);
            if (index >= 0) {
                return true;
            }
            return false;
        }
        removeChildren(beginIndex = 0, endIndex = 2147483647) {
            let begin = beginIndex;
            let end = endIndex;
            if (end > this._children.length) {
                end = this._children.length;
            }
            const range = end - begin;
            if (range > 0 && range <= end) {
                var removedChildren = this._children.splice(begin, range);
                for (let i = 0; i < removedChildren.length; ++i) {
                    DisplayObject_1.DisplayObject.setParent(removedChildren[i], null);
                }
            }
        }
        removeChild(child) {
            const index = this._children.indexOf(child);
            if (index === -1) {
                return null;
            }
            this._children.splice(index, 1);
            DisplayObject_1.DisplayObject.setParent(child, null);
            return child;
        }
        getChildIndex(child) {
            const index = this._children.indexOf(child);
            if (index === -1) {
                new Error_1.Error('The supplied DisplayObject must be a child of the caller');
                return null;
            }
            return index;
        }
        swapChildren(child1, child2) {
            if (child1 === child2) {
                return;
            }
            const index1 = this.getChildIndex(child1);
            const index2 = this.getChildIndex(child2);
            this._children[index1] = child2;
            this._children[index2] = child1;
        }
    }
    exports.InnerContainer = InnerContainer;
});
//# sourceMappingURL=DisplayObjectContainer.js.map