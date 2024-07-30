document.getElementById('convertButton').addEventListener('click', function() {
    const fromValue = parseFloat(document.getElementById('fromValue').value);
    const fromUnit = document.getElementById('fromUnit').value;
    const toUnit = document.getElementById('toUnit').value;

    const conversionRates = {
        meter: { meter: 1, kilometer: 0.001, mile: 0.000621371, yard: 1.09361, foot: 3.28084, inch: 39.3701, centimeter: 100, millimeter: 1000, micrometer: 1e6, nanometer: 1e9, nauticalMile: 0.000539957 },
        kilometer: { meter: 1000, kilometer: 1, mile: 0.621371, yard: 1093.61, foot: 3280.84, inch: 39370.1, centimeter: 100000, millimeter: 1e6, micrometer: 1e9, nanometer: 1e12, nauticalMile: 0.539957 },
        mile: { meter: 1609.34, kilometer: 1.60934, mile: 1, yard: 1760, foot: 5280, inch: 63360, centimeter: 160934, millimeter: 1.609e6, micrometer: 1.609e9, nanometer: 1.609e12, nauticalMile: 0.868976 },
        yard: { meter: 0.9144, kilometer: 0.0009144, mile: 0.000568182, yard: 1, foot: 3, inch: 36, centimeter: 91.44, millimeter: 914.4, micrometer: 914400, nanometer: 9.144e8, nauticalMile: 0.000493737 },
        foot: { meter: 0.3048, kilometer: 0.0003048, mile: 0.000189394, yard: 0.333333, foot: 1, inch: 12, centimeter: 30.48, millimeter: 304.8, micrometer: 304800, nanometer: 3.048e8, nauticalMile: 0.000164579 },
        inch: { meter: 0.0254, kilometer: 0.0000254, mile: 0.0000157828, yard: 0.0277778, foot: 0.0833333, inch: 1, centimeter: 2.54, millimeter: 25.4, micrometer: 25400, nanometer: 2.54e7, nauticalMile: 0.0000137149 },
        centimeter: { meter: 0.01, kilometer: 0.00001, mile: 0.0000062137, yard: 0.0109361, foot: 0.0328084, inch: 0.393701, centimeter: 1, millimeter: 10, micrometer: 10000, nanometer: 1e7, nauticalMile: 0.00000539957 },
        millimeter: { meter: 0.001, kilometer: 0.000001, mile: 0.000000621371, yard: 0.00109361, foot: 0.00328084, inch: 0.0393701, centimeter: 0.1, millimeter: 1, micrometer: 1000, nanometer: 1e6, nauticalMile: 0.000000539957 },
        micrometer: { meter: 1e-6, kilometer: 1e-9, mile: 6.2137e-10, yard: 1.0936e-6, foot: 3.2808e-6, inch: 3.937e-5, centimeter: 0.0001, millimeter: 0.001, micrometer: 1, nanometer: 1000, nauticalMile: 5.3996e-10 },
        nanometer: { meter: 1e-9, kilometer: 1e-12, mile: 6.2137e-13, yard: 1.0936e-9, foot: 3.2808e-9, inch: 3.937e-8, centimeter: 1e-7, millimeter: 1e-6, micrometer: 0.001, nanometer: 1, nauticalMile: 5.3996e-13 },
        nauticalMile: { meter: 1852, kilometer: 1.852, mile: 1.15078, yard: 2025.37, foot: 6076.12, inch: 72913.4, centimeter: 185200, millimeter: 1.852e6, micrometer: 1.852e9, nanometer: 1.852e12, nauticalMile: 1 }
    };

    const convertedValue = (fromValue * conversionRates[fromUnit][toUnit]).toFixed(2);
    document.getElementById('toValue').value = convertedValue;
});
