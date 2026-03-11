sap.ui.define([
    "sap/ui/test/opaQunit",
    "./pages/JourneyRunner"
], function (opaTest, runner) {
    "use strict";

    function journey() {
        QUnit.module("First journey");

        opaTest("Start application", function (Given, When, Then) {
            Given.iStartMyApp();

            Then.onThexALICExEK_C_A_DISBCOMP_HDRList.iSeeThisPage();
            Then.onThexALICExEK_C_A_DISBCOMP_HDRList.onFilterBar().iCheckFilterField("Exkasso-Sammler-Nr");
            Then.onThexALICExEK_C_A_DISBCOMP_HDRList.onFilterBar().iCheckFilterField("Datensatzinformation: Anlage-Datum");
            Then.onThexALICExEK_C_A_DISBCOMP_HDRList.onFilterBar().iCheckFilterField("Buchungskreis");
            Then.onThexALICExEK_C_A_DISBCOMP_HDRList.onFilterBar().iCheckFilterField("Zahlweg");
            Then.onThexALICExEK_C_A_DISBCOMP_HDRList.onFilterBar().iCheckFilterField("Kurzschlüssel für eine Hausbank");
            Then.onThexALICExEK_C_A_DISBCOMP_HDRList.onFilterBar().iCheckFilterField("Auftragsdatum");
            Then.onThexALICExEK_C_A_DISBCOMP_HDRList.onFilterBar().iCheckFilterField("Währungsschlüssel");
            Then.onThexALICExEK_C_A_DISBCOMP_HDRList.onFilterBar().iCheckFilterField("Verarbeitungsstatus Bankrückmeldung");
            Then.onThexALICExEK_C_A_DISBCOMP_HDRList.onTable().iCheckColumns(10, {"Ctcno":{"header":"Exkasso-Sammler-Nr"},"Alganda":{"header":"Datensatzinformation: Anlage-Datum"},"Bukrs":{"header":"Buchungskreis"},"Zahlstc":{"header":"Zahlweg"},"BankAccountKey":{"header":"Kurzschlüssel für eine Hausbank"},"Cthdate":{"header":"Auftragsdatum"},"Cthcurr":{"header":"Währungsschlüssel"},"Cthkonb":{"header":"Kontrollsumme Betrag"},"Cthkoas":{"header":"Kontrollsumme Anzahl Sätze"},"Statbnk":{"header":"Verarbeitungsstatus Bankrückmeldung"}});

        });


        opaTest("Navigate to ObjectPage", function (Given, When, Then) {
            // Note: this test will fail if the ListReport page doesn't show any data
            
            When.onThexALICExEK_C_A_DISBCOMP_HDRList.onFilterBar().iExecuteSearch();
            
            Then.onThexALICExEK_C_A_DISBCOMP_HDRList.onTable().iCheckRows();

            When.onThexALICExEK_C_A_DISBCOMP_HDRList.onTable().iPressRow(0);
            Then.onThexALICExEK_C_A_DISBCOMP_HDRObjectPage.iSeeThisPage();

        });

        opaTest("Teardown", function (Given, When, Then) { 
            // Cleanup
            Given.iTearDownMyApp();
        });
    }

    runner.run([journey]);
});