import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  downloadPdf(fileName: string) {
    // Construction de l'URL du fichier PDF en fonction du nom fourni
    const pdfUrl = `./assets/${fileName}.pdf`;

    // Créer un élément <a> temporaire
    const link = document.createElement('a');
    link.href = pdfUrl;

    // Définir l'attribut de téléchargement pour définir le nom du fichier
    link.download = 'ayacv.pdf';

    // Ajouter l'élément au DOM et déclencher le clic pour démarrer le téléchargement
    document.body.appendChild(link);
    link.click();

    // Retirer l'élément du DOM
    document.body.removeChild(link);
}
}
