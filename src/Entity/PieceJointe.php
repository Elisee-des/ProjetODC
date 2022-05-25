<?php

namespace App\Entity;

use App\Repository\PieceJointeRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=PieceJointeRepository::class)
 */
class PieceJointe
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $fichier;

    /**
     * @ORM\ManyToOne(targetEntity=Candidature::class, inversedBy="pieceJointes")
     * @ORM\JoinColumn(nullable=false)
     */
    private $candidatures;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getFichier(): ?string
    {
        return $this->fichier;
    }

    public function setFichier(string $fichier): self
    {
        $this->fichier = $fichier;

        return $this;
    }

    public function getCandidatures(): ?Candidature
    {
        return $this->candidatures;
    }

    public function setCandidatures(?Candidature $candidatures): self
    {
        $this->candidatures = $candidatures;

        return $this;
    }
}
