var pageObject = {
  data: {
    positionSalary: '',//岗位工资
    totalTax: '',//计税总额
    personalIncomeTax: '',//个人所得税
    result:'0'
  },
  bindPositionSalaryInput: function (e) {
    this.setData({
      positionSalary: e.detail.value
    })
  },
  bindtotalTax: function (e) {
    this.setData({
      totalTax: e.detail.value
    })
  },
  bindpersonalIncomeTax: function (e) {
    this.setData({
      personalIncomeTax: e.detail.value
    })
  },
  getResult: function () {
    var mPositionSalary = this.data.positionSalary//岗位工资
    var mTotalTax = this.data.totalTax//计税总额
    var mPersonalIncomeTax = this.data.personalIncomeTax//个人所得税
    var positionTaxRatio = (mPositionSalary / mTotalTax) * mPersonalIncomeTax;//岗位工资税值
    var baseLine = mPositionSalary - positionTaxRatio//基数
    console.log("岗位工资:" + mPositionSalary);
    console.log("计税总额:" + mTotalTax);
    console.log("个人所得税:" + mPersonalIncomeTax);
    console.log("岗位工资税值:" + positionTaxRatio);
    console.log("基数:" + baseLine);
    //缴纳比例,按基数:
    // 3000元以下（含）          0.5%；
    // 3000元以上至5000元（含）  1%；
    // 5000元以上至10000元（含） 1.5%；
    // 10000元以上               2%。
    var totalRatio;
    if (baseLine <= 3000) {
      totalRatio = 0.005;
    } else if (baseLine <= 5000) {
      totalRatio = 0.01;
    } else if (baseLine <= 10000) {
      totalRatio = 0.015;
    } else {
      totalRatio = 0.02;
    }
    var resultFee = baseLine * totalRatio

    console.log("党费:" + baseLine * totalRatio);
    this.setData({
      result: resultFee.toFixed(2)
    })
  }
}

Page(pageObject)