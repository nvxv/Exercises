function parseAndDisplayCode(code) {

        function getProductNumber(code) {
            return code.slice(
            code.indexOf(":") + 1,
            code.lastIndexOf("-"),
            );
        }

  // that returns all characters before the :

        function getSupplier(code) {
            return code.slice(0, code.indexOf(":"));
        }

// that returns all characters between the : and -

        function getSize(code) {
            return code.slice(code.indexOf("-") + 1);
        }

// that returns all characters after the - 
  
        console.log(getSupplier(code, ":"))
        console.log(getProductNumber(code, ":", "-"));
        console.log(getSize(code, "-"))
  
}

parseAndDisplayCode("ACME:123-L")
parseAndDisplayCode("DI:12345-M")
parseAndDisplayCode("ACE:1-12")