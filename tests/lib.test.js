const lib=require('../lib');

describe('absolute',()=>{
    it('Should return positive when number is positive',()=>{
        let result=lib.absolute(1);
        expect(result).toBe(1);
    });
    it('Should return positive when number is negetive',()=>{
        let result=lib.absolute(-1);
        expect(result).toBe(1);
    });
    
    it('Should return 0 when number is 0',()=>{
        let result=lib.absolute(0);
        expect(result).toBe(2);
    });
})

describe('greet',()=>{
    it('Should return geet message with param',()=>{
        let result=lib.greet('santhosh')
        expect(result).toContain('santhosh')
    });
});

describe('getCurrencies',()=>{
    it('Should return supported currencies',()=>{
        let result=lib.getCurrencies();

        //
        expect(result.length).toBe(3);
        expect(result).toEqual(expect.arrayContaining(['AUD','USD','EUR']))
    });
});


describe('getProduct',()=>{
    it('Should return product by passed product id',()=>{
        let result=lib.getProduct(1);
        expect(result).toMatchObject({ id: 1 })
    });
});

describe('registerUser',()=>{
    it('Should throw exception when username is falsy',()=>{
        let args=[null,undefined,NaN,'',0]
        args.forEach(arg => {
            expect(()=>{ lib.registerUser(arg)}).toThrow();            
        });
    });
    it('Should return user when we pass truthy username',()=>{
        let result=lib.registerUser('santhosh');
        expect(result).toMatchObject({ username: 'santhosh' });
        expect(result.id).toBeGreaterThan(0);
    });
});