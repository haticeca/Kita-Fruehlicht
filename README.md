# Kita-Fruehlicht

Diese Webseite dient für die Online-Präsentation einer Kita. 
Da ursprünglich ein Login geplant war (zeitlich nicht mehr geschafft) ist die Webseite aus Sicht eines Admins zu sehen. 
Im Menü sind Konzepte, Anmeldung und Projekte, die zu weiteren Links führen. Die Icons rechts "Login" und "Suche" sind erstmal zur Veranschaulichung da.
Unter Anmeldung sieht man die 3 Schritte für eine erfolgreiche Aufnahme in der Kita. Unter Schritt eins kann man sich online in die Warteliste eintragen(create).

1) Wir haben eine Datenbank "Members" für die Eltern, die ihre Kinder in die Online-Warteliste eintragen wollen (create-members.component). 
2) Der Admin kann unter dem Punkt "Einstellungen", welches oben rechts im Header abgebildet ist, in die Warteliste gelangen. Dort ist die Liste aller eingetragenen Kinder zu sehen (read.component). Punkt "Projekt bearbeiten" im Dropdown wird noch bearbeitet.
3) Man hat als Admin nun die Möglichkeit Daten aus der Liste zu löschen. Dafür klickt man auf das Icon "delete". Es öffnet sich ein Modal. Um den Löschvorgang zu vollziehen muss man es nochmal bestätigen oder man kann den Vorgang abbrechen. 
4) Weiterhin kann der Admin die Daten ändern unter dem icon "bearbeiten"(form.component). Je nach dem welches Kind aus der Liste gewählt wird, werden die Daten des jew. Kindes angezeit. Man kann nun die Daten ändern. Wenn man auf den Button "Update" klickt, werden die Daten leider noch nicht in der Datenbank geändert (Grund nicht gefunden aber alles wie in Übungen gemacht). Man kommt wieder auf die Seite mit den Liste aller eingetragenen Kinder. 
5) Außerdem sollte man im Abschnitt "Anmeldung" (register-members.component) noch die Möglichkeit haben den Kita-Gutschein vom Jugendamdt also eine PDF-Datei herunterzuladen, welches noch nicht möglich ist. Die PDF-Datei befindet sich erstmal in "assets" Ordner.
6) Es gibt eine weitere Datenbank "Projekte" für den Admin. Mithilfe dieser Datenbank, soll der Admin neue Projekte hinzufügen, löschen und ändern können. Zurzeit kann man die Projekte nur sehen (projekte.component). Im Backend sind die Apis (CRUD-Funktionalitäten) vorhanden und im Frontend gibt es auch die benötigten Service für CRUD-Funktionen.
7) Landingspage begrüßt die Webseite-Besucher und gibt Ihnen einen Überblick über die wichtigsten Informationen und leitet Sie bei Interesse an weitere Seiten.

8) Der Footer ist zur Veranschaulichung da, die Links dafür wurden nicht beararbeitet, da keine Informationen bestehen.



