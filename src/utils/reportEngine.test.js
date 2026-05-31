const { getReports } = require("./reportEngine");

jest.setTimeout(10000);

describe("CityFix E2E Live Network", () => {
    test("Debe obtener los reportes guardados en Supabase", async () => {
        const reports = await getReports();

        console.log("Cantidad de reportes:", reports.length);

        expect(Array.isArray(reports)).toBe(true);
        expect(reports.length).toBeGreaterThan(0);
    });

    test("Cada reporte debe tener los datos", async () => {
        const reports = await getReports();
        const report = reports[0];

        expect(report).toHaveProperty("id");
        expect(report).toHaveProperty("title");
        expect(report).toHaveProperty("category");
        expect(report).toHaveProperty("votes");
    });
});