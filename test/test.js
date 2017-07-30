
var expect=chai.expect;
describe('My calculator', function () {

    describe('Legal test', function () {

        it('3+5 = 8', function () {
            expect(deal("3+5")).to.be.equal(8);
        });
        it('9*4 = 36',function () {
            expect(deal("9*4")).to.be.equal(36);
        })
        it("1+-3 = -2",function () {
            expect(deal("1+-3")).to.be.equal(-2);
        })
        it('(100+12)/4 = 28',function () {
            expect(deal("(100+12)/4")).to.be.equal(28);
        })
        it('-2*9+4*2 = -10',function () {
            expect(deal("-2*9+4*2")).to.be.equal(-10);
        })
        it("(2**3-3)*9 = 45",function () {
            expect(deal("(2**3-3)*9")).to.be.equal(45);
        })
        it("1-1/2 = 0.5",function () {
            expect(deal("1-1/2")).to.be.equal(0.5);
        })
        it("11*12/(1+(1/2))+5*(6-4)*31 = 398",function () {
            expect(deal("11*12/(1+(1/2))+5*(6-4)*31")).to.be.equal(398);
        })
        it("4*(-3+6) = 12",function () {
            expect(deal("4*(-3+6)")).to.be.equal(12);
        })
        it("1/3 = 0.3333333333333",function () {
            expect(deal("1/3")).to.be.equal(1/3);
        })
        it("(((24-5)-(11-6))*2+2)/6-3 = 2",function () {
            expect(deal("(((24-5)-(11-6))*2+2)/6-3")).to.be.equal(2);
        })
    });
    describe("illegal test",function () {
        it('1+++3 = input error',function () {
            expect(deal("1+++3")).to.be.equal("input error");
        })
        it(" 5/0 = divide by zero",function(){
            expect(deal("5/0")).to.be.equal("divided by zero");
        })
        it("9+((2*3 = input error",function () {
            expect(deal("9+((2*3")).to.be.equal("input error");
        })
        it('1+++3 = input error',function () {
            expect(deal("1+++3")).to.be.equal("input error");
        })
        it("1+*3 = input error",function () {
            expect(deal("1+*3")).to.be.equal("input error");
        })
        it("-7/(-3+3)+2 = divide by zero",function () {
            expect(deal("-7/(-3+3)+2")).to.be.equal("divided by zero");
        })
        it("4* = input error",function () {
            expect(deal("4*")).to.be.equal("input error");
        })
        it("(((((1+2) = input error",function () {
            expect(deal("(((((1+2)")).to.be.equal("input error");
        })
        it("++++2-333 = input error",function () {
            expect(deal("++++2-333")).to.be.equal("input error");
        })
        it("1+-*/2/0 = input error",function () {
            expect(deal("1+-*/2")).to.be.equal("input error");
        })
    })
    describe("")
});