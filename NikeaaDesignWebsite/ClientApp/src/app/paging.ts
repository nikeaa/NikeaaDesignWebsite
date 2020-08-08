export class Paging {
  pageSize = 2;
  pageNumber = 1;
  pageCount = 1;
  firstItemNumber = 1;
  lastItemNumber = this.pageSize;
  itemCount = 0;
  refreshItems: () => void;

  constructor() {
    //this.pageSize = ps;
    //this.refreshItems = ri;
  }

  ngOnInit() { }

  onGotoPageClick(pageNumber: number) {
    if (pageNumber <= this.pageCount) this.pageNumber = pageNumber;
    this.refreshItems();
  }

  onFirstPageClick() {
    this.pageNumber = 1;
    this.refreshItems();
  }

  onPreviousPageClick() {
    if (this.pageNumber > 1) this.pageNumber--;
    this.refreshItems();
  }

  onNextPageClick() {
    if (this.pageNumber < this.pageCount) this.pageNumber++;
    this.refreshItems();
  }

  onLastPageClick() {
    this.pageNumber = this.pageCount;
    this.refreshItems();
  }

  calculatePageCount(itemCount: number, itemsPerPage: number) {
    var result = Math.trunc(itemCount / itemsPerPage);
    if (result * itemsPerPage != itemCount) result++;

    return result;
  }

  calculateFirstAndLastItem() {
    this.firstItemNumber = (this.pageNumber - 1) * this.pageSize + 1;
    this.lastItemNumber = this.pageNumber * this.pageSize;
    if (this.lastItemNumber > this.itemCount) this.lastItemNumber = this.itemCount;
  }
}
